import { Fragment } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function MobileNav() {
  const { theme, setTheme } = useTheme();

  return (
    <Fragment>
      <div className="fixed bottom-0 left-0 right-0 bg-background p-2">
        <div className="max-w-md m-auto flex justify-between">
          <Link href="/">
            <h1 className="text-3xl text-foreground font-bold">Especial</h1>
          </Link>
          <div className="flex items-center">
            <button
              className="focus:outline-none"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <SunIcon size={20} className="cursor-pointer" />
              ) : (
                <MoonIcon size={20} className="cursor-pointer" />
              )}
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
