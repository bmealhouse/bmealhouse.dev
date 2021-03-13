import Link from "next/link";

import { Container } from "@/components/container";

export default function BMealhouse404() {
  return (
    <Container>
      <main className="space-y-14 text-center">
        <div className="font-black">
          <h1 className="text-9xl text-yellow-300 dark:text-yellow-200">404</h1>
          <h2 className="text-5xl text-gray-800 dark:text-gray-50">
            Not Found
          </h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a className="link">Home</a>
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </Container>
  );
}
