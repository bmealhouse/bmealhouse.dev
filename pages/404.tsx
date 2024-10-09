import Link from "next/link";

import { Container } from "@/components/container";

export default function BMealhouse404() {
  return (
    <Container title="404 - Brent Mealhouse">
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
              <Link className="link" href="/">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </Container>
  );
}
