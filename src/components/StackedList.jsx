const people = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    image:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export default function StackedList({ dataSet }) {
  return (
    <ul role="list" className="z-50 w-full divide-y divide-gray-200">
      {dataSet &&
        dataSet.map((data) => (
          <li key={data.name} className="flex py-4">
            <div className="">
              <p className="text-2xl font-medium text-white hover:text-sky-500">
                <a href={data.baseURL + 'index.html'}>{data.name}</a>
              </p>
              <p className="text-lg text-gray-300 ">
                {dataSet &&
                  data.pages.map((page, index) => (
                    <>
                      <a
                        href={data.baseURL + page}
                        className="hover:text-sky-500"
                      >
                        {page}
                      </a>
                      {index < data.pages.length - 1 && <span> - </span>}
                    </>
                  ))}
              </p>
            </div>
          </li>
        ))}
    </ul>
  )
}
