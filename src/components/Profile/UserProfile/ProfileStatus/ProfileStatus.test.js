import React from "react";
import {create} from "react-test-renderer";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileStatusClass} from "./ProfileStatusClass";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatusClass status="My testing status" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("My testing status");
    });
});
