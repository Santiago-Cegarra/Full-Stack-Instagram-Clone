import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { Bookmark, MessageCircle, MoreHorizontal, Send } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import CommentDialog from "./CommentDialog";
const Post = () => {
    const [text, setText] = useState("");
    const changeEventHandler= (e) => {
        const inputText = e.target.value;
        if(inputText.trim()){
            setText(inputText);
        }
    }
    return (
        <div className="my-8 w-full max-w-sm mx-auto">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Avatar>
                        <AvatarImage src="" alt="post_image" />
                        <AvatarFallback> CN </AvatarFallback>
                    </Avatar>
                    <h1>username</h1>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <MoreHorizontal className="cursor-pointer" />
                    </DialogTrigger>
                    <DialogContent className='flex flex-col items-center text-sm text-center'>
                        <Button variant='ghost' className="cursor-pointer w-fit text-[#ED4956] font bold" >Unfollow</Button>
                        <Button variant='ghost' className="cursor-pointer w-fit">Add to Favorites</Button>
                        <Button variant='ghost' className="cursor-pointer w-fit" >Delete</Button>
                    </DialogContent>
                </Dialog>
            </div>
            <img
                className="rounded-sm my-2 w-full aspect-square object-cover"
                src="https://images.unsplash.com/photo-1745799326349-f14158d60a2c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="post_image" />

            <div className="flex items-center justify-between my-2">
                <div className="flex items-center gap-3">
                    <FaRegHeart size={'24px'} className="cursor-pointer hover:text-gray-600" />
                    <MessageCircle className="cursor-pointer hover:text-gray-600" />
                    <Send className="cursor-pointer hover:text-gray-600" />
                </div>
                <Bookmark className="cursor-pointer hover:text-gray-600" />
            </div>
            <span className="font-medium block mb-2">1k Likes</span>
            <p>
                <span className="font-medium mr-2">username</span>
                caption
            </p>
            <span>View All 10 Coments</span>
            <CommentDialog/>
            <div>
                <input
                type="text"
                placeholder="Add a coment..."
                value={text}
                onChange={changeEventHandler}
                className="outline-none text-sm w-full"
                />
                <span className="text-[#3BADF8]">Post</span>
            </div>
        </div>
    )
}

export default Post