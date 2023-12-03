import { useQuery } from '@apollo/client';
import { COUNTRIES_QUERY } from '../api/queries';
import { QueryResponseType } from '../@types';

type TableProps = {
  filter: string;
};

const Table = ({ filter }: TableProps) => {
  const { data, error, loading } = useQuery<QueryResponseType>(COUNTRIES_QUERY);

  if (loading) {
    return (
      <div className="flex justify-center mx-auto mt-8 ">
        <span className="loading loading-lg loading-spinner"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-11/12 md:max-w-md mx-auto mt-40">
        <div
          role="alert"
          className="alert alert-error w-full flex flex-col rounded-lg ">
          <span>Failed to fetch necessary data.</span>
          <span>
            Try{' '}
            <a
              href="/"
              className="link font-semibold">
              reloading
            </a>{' '}
            the page
          </span>
        </div>
      </div>
    );
  }

  const filteredCountries =
    typeof data === 'undefined'
      ? []
      : data.countries.filter(
          ({ code }) => code.toLowerCase().indexOf(filter.trim().toLowerCase()) > -1
        );

  return (
    <div className="overflow-x-auto w-11/12 md:w-3/4 lg:w-1/2 flex mx-auto mb-8 mt-4 opacity-0 animate-fade-in">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th className="w-1/2 text-center">Country name</th>
            <th className="w-1/2 text-center">Country code</th>
          </tr>
        </thead>
        <tbody>
          {filteredCountries.map(({ code, emoji, name }) => (
            <tr key={code}>
              <td>
                <span>{emoji} </span>
                {name}
              </td>
              <td className="text-center">{code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
