import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import VideoCard from "../components/VideoCard";
import { useAuth, useHistory } from "../context";
import { deleteAllHistory } from "../services";
import { useNavigate } from "react-router-dom";

function History() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const { history, setHistory } = useHistory();
  console.log(history);

  // for future reference
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/user/history", {
          headers: {
            authorization: token,
          },
        });
        setHistory([...data.history]);
      } catch (error) {
        console.log("error in getting in history", error);
      }
    })();
  }, []);

  return (
    <>
      {history.length ? (
        <>
          <button
            className="btn btn-m primary-btn font-17 font-bold margin-b-1"
            onClick={() => deleteAllHistory(token, setHistory)}
          >
            delete History
          </button>
        </>
      ) : (
        <>
          <h1 className="text-center">You have not watched any videos!!</h1>
          <button
            className="btn btn-m primary-btn font-17 font-bold"
            onClick={() => navigate("/home")}
          >
            explore videos
          </button>
        </>
      )}

      <section class="video-listing flex-row-wrap">
        {history.map((video) => {
          return <VideoCard key={video._id} video={video} />;
        })}
      </section>
    </>
  );
}

export default History;
