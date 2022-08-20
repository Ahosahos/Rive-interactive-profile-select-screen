import React from "react";
import Account from "../components/Account";
import ManageAccount from "../components/ManageAccount";

export default function AccountSelection() {
    return (
        <div className="account-selection-container">
            <div className="title">Who's watching?</div>
            <div className="account-selection">
                <Account name="User 1" backgroundColor={"#39ff14"}/>
                <Account name="User 2" backgroundColor={"#ffd0f4"}/>
            </div>
            <ManageAccount />
        </div>
    )
}