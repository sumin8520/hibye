export default function AddTopic() {
  return (
    <form className="flex flex-col gap-3">
      <input
        className="border border-slate-500 p-4"
        type="text"
        placeholder="title"
      />

      <textarea
        className="border border-slate-500 p-4 h-32"
        type="text"
        placeholder="description"
      />

      <button
        className="bg-green-800 text-white font-bold px-6 py-3 w-fit rounded-md"
        href="/components/addTopic"
      >
        댓글 추가
      </button>
    </form>
  )
}
