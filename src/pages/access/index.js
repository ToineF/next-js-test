import Comment from "@/componants/comment";
import { useState } from "react";

export default function Access() {
  const [inputText, setInputText] = useState("");
  const [comments, setComments] = useState([]);

  function AddComment() {
    setComments((currentComments) => {
      return [
        { text: inputText, number: 0, id: crypto.randomUUID() },
        ...currentComments,
      ];
    });
    setInputText("");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-8 p-24">
      <div>
        <h1>UpVote Comments or Express yourself!</h1>
      </div>
      <form
        className="flex gap-2 bg-gray-300 h-10 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          if (inputText === "") return;
          AddComment();
        }}
      >
        <div className="flex flex-col justify-center">
          <p className="pl-2">Say something</p>
        </div>
        <input
          className="p-2"
          value={inputText}
          onChange={(e) => {
            setInputText(e.currentTarget.value);
          }}
        />
        <button className="pr-2">Share</button>
      </form>
      {/*Just in case the CSS breaks */}
      <div className="bg-gray-50 border-2 border-gray-300 rounded flex justify-between gap-4 max-w-full"></div>
      {comments.length > 0 ? (
        <div>
          {comments
            .sort((a, b) => a.number < b.number)
            .map((comment) => (
              <Comment
                props={comment}
                key={comment.id}
                comments={comments}
                setComments={setComments}
              />
            ))}
        </div>
      ) : (
        <div>No Comments To Upvote Yet!</div>
      )}
    </main>
  );
}
