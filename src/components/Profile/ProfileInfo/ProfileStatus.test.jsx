import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus Component", () => {
    test("status from props should be in the state ", () => {
        const component = create(<ProfileStatus status="It is a test" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("It is a test");
    });

    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status="It is a test" />);
        const root = component.root;
        let span = root.findByType("span")
        expect(span).not.toBeNull();
    });

    test("after creation <input> shouldn'to be displayed", () => {
        const component = create(<ProfileStatus status="It is a test" />);
        const root = component.root;

        expect(() => {
            let input = root.findByType("input")
        }).toThrow();
    });

    test("after creation <span> should contains correct status", () => {
        const component = create(<ProfileStatus status="It is a test" />);
        const root = component.root;
        let span = root.findByType("span")
        expect(span.children[0]).toBe("It is a test");
    });

    test("input should be displayed in editMode instead of span ", () => {
        const component = create(<ProfileStatus status="It is a test" />);
        const root = component.root;
        let span = root.findByType("span")
        span.props.onDoubleClick()
        let input = root.findByType("input")
        expect(input.props.value).toBe("It is a test");
    });
    test("callback should be called ", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="It is a test" updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactiveEditMode()
        expect(mockCallback.mock.calls.length).toBe(1);
    });


});
