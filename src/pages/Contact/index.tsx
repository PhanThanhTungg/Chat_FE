import { Input } from "@/components/ui/input";
import { getListUserSearch } from "@/services/friend.service";
import type { UserSearch } from "@/types/response.type";
import { Button } from "@/components/ui/button"
import React, { useState } from "react";
const Contact = ()=>{
  const [users, setUsers] = useState<UserSearch[]>([])

  const inputHandler = async (e: React.ChangeEvent<HTMLInputElement>)=>{
    const value = e.target.value;
    try {
      const usersSearch:UserSearch[] = await getListUserSearch(value);
      console.log("User search results:", usersSearch);
      setUsers(usersSearch);
    } catch (error) {
      console.error("Failed to fetch user search results:", error);
    }
  }

  const handleSendRequest = (userId: string) => {
    console.log("Send request clicked", userId);
  }

  return (
    <div className="tab-content">
      <h2>Contacts</h2>
      <Input type="email" placeholder="Enter phone or name" onChange = {inputHandler}/>
      <div>
        {users.map(user => (
          <div key={user.id}>
            <img src={user.avatar} alt={user.fullName} />
            <h3>{user.fullName}</h3>
            <Button variant="outline" onClick={()=>{handleSendRequest(user.id)}}>Send</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Contact;