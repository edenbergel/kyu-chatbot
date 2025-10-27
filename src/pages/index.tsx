import { ThreeSphere } from "@/components/ThreeSphere";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useInputValue } from "@/hooks/useInputValue";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { value, onChange } = useInputValue();
  const goToChat = () => {
    router.push("/chat");
    localStorage.setItem("name", value);
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between py-16 px-4 bg-white dark:bg-black">
      <h1 className="text-4xl font-bold">{`My name is Kyū`}</h1>
      <h4 className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
        Your friendly neighborhood chatbot.
      </h4>
      <ThreeSphere />
      <Input
        value={value}
        placeholder="Write your name here..."
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            goToChat();
          }
        }}
      />
      <Button onClick={goToChat} text="Start Chat" className="mt-4" />
      <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
        This is a simple chatbot application built with Next.js and OpenAI.
      </p>
    </div>
  );
}
