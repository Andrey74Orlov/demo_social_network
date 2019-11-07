import reducerProfile, { addPostActionCreator } from "./reducerprofile";
// 



it('lenght of postData should incremented', () => {
    // 1. test data
    let action = addPostActionCreator('my first test') 
    let state = {
        postData: [
            { id: 1, message: 'Hi, how are you?', like: '12' },
            { id: 2, message: "It's my first post", like: '40' },
    
        ]
    };
    // 2. action

    let newState = reducerProfile(state, action)

    // 3. expectation
    expect(newState.postData.length).toBe(3)
});


