const communities = [
    {
      id: 1,
      name: 'Programming Club',
      description: 'A community for programmers to discuss and share ideas.',
    },
    {
      id: 2,
      name: 'Photography Enthusiasts',
      description: 'Join us if you love capturing moments!',
    },
    {
      id: 3,
      name: 'Healthy Living',
      description: 'Tips and discussions on living a healthy lifestyle.',
    },
  ];

export default function Communities() {
  return (
    <CommunityList communities={communities} />
  )
}

const CommunityList = ({ communities }) => {
    return (


<div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
  <div className="flex items-center justify-between mb-4">
    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
      Top Communities
    </h5>
    <a
      href="#"
      className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
    >
      View all
    </a>
  </div>
  <div className="flow-root">
    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
    {communities.map((community) => (
        <li key={community.id} className="py-3 sm:py-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="w-8 h-8 rounded-full"
              src="/logo.png"
              alt="Community image"
            />
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {community.name}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {community.description}
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            $320
          </div>
        </div>
      </li>
          ))}

    </ul>
  </div>
</div>


    );
  };
  