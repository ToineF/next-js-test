export default function Access() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-8 p-24">
      <div>
        <h1>UpVote Comments or Express yourself!</h1>
      </div>
      <form className="flex flex-row gap-2">
        <div>
          <p className="border border-green-600">Say something</p>
        </div>
        <input className="border border-green-600" />
        <button className="border border-green-600">Share</button>
      </form>
      <div>No Comments To Upvote Yet!</div>
    </main>
  );
}
