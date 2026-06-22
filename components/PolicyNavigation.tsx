import Link from "next/link";

interface Props {
  previous?: {
    title: string;
    href: string;
  };

  next?: {
    title: string;
    href: string;
  };
}

export default function PolicyNavigation({
  previous,
  next,
}: Props) {
  return (
    <div className="max-w-6xl mx-auto px-6 pb-20">

      <div className="flex justify-between">

        {previous ? (
          <Link
            href={previous.href}
            className="bg-white shadow-lg rounded-xl px-6 py-4 hover:shadow-xl"
          >
            ← {previous.title}
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={next.href}
            className="bg-white shadow-lg rounded-xl px-6 py-4 hover:shadow-xl"
          >
            {next.title} →
          </Link>
        ) : (
          <div />
        )}

      </div>

    </div>
  );
}