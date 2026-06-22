import Link from "next/link";

interface BreadcrumbsProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export default function Breadcrumbs({
  items,
}: BreadcrumbsProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-4">

    <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">

        {items.map((item, index) => (
          <div key={item.label} className="flex items-center gap-2">

            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-blue-700"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-gray-700">
                {item.label}
              </span>
            )}

            {index < items.length - 1 && (
              <span>/</span>
            )}

          </div>
        ))}

      </div>

    </div>
  );
}