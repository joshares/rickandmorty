import Pagination from "./Pagination";
import Search from "./Search";
import Table from "./Table";

export default function HomePage() {
  return (
    <main>
      <div class="relative pb-20 min-h-[30rem] overflow-x-auto shadow-md sm:rounded-lg  rounded-xl bg-white">
        <Search />
        <table class="w-full text-sm text-left text-black bg-white rounded-2xl">
          <thead class="text-xs text-[#8094ae] capitalize border-b">
            <tr>
              <th scope="col" class="px-4 py-5">
                #
              </th>
              <th scope="col" class="px-6 py-5">
                Name
              </th>
              <th scope="col" class="px-4 py-5">
                Status
              </th>
              <th scope="col" class="px-4 py-5">
                Species
              </th>
              <th scope="col" class="px-4 py-5">
                Type
              </th>
              <th scope="col" class="px-6 py-5">
                Gender
              </th>
              <th scope="col" class="px-6 py-5"></th>
            </tr>
          </thead>
          {[1, 2, 3, 4, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5].map((quote, index) => {
            return <Table key={index} />;
          })}
        </table>
        <Pagination />
      </div>
    </main>
  );
}

// “name", "status", "species","type", and "gender".
