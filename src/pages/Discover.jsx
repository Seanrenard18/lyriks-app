import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetTopchartsQuery } from "../redux/services/shazamCore";

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetTopchartsQuery();
  const genreTitle = "pop";



  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;


console.log(data)
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col text-white justify-between items-center sm:flex-row mt-4 mb-10">

     <h1 className="font-bold text-3xl"> Discover {genreTitle}</h1>

        <select
          onChange={() => {}}
          value=" "
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:-0 mt-5 "
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8 ">
        {data?.map((song, i) => (

          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
          
        ))} 
      </div>
    </div>
  );
};
export default Discover;
