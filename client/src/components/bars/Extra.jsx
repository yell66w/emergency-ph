import React, { useEffect, useState } from "react";
import VolunteerExtra from "../misc/VolunteerExtra";
import Hashtag from "../misc/Hashtag";
import { TagService } from "../../services/TagService";
import Loader from "react-spinners/MoonLoader";
import { UserService } from "../../services/UserService";
const Extra = ({ currentUser }) => {
  const [trendingTags, setTrendingTags] = useState([]);
  const [isLoadingTags, setIsLoadingTags] = useState(true);
  const [volunteers, setVolunteers] = useState([]);
  const [isLoadingVolunteers, setIsLoadingVolunteers] = useState(true);
  const _tags = new TagService();
  const _users = new UserService();
  const [hotlines, setHotlines] = useState([
    {
      name: "Emergency Hotline",
      phone: "911",
    },
    {
      name: "NDRRMC",
      phone: "(02) 8911-5061 to 65 LOC 100",
    },
    {
      name: "PAGASA",
      phone: "(02) 8284-0800",
    },
    {
      name: "MMDA",
      phone: "(02) 882 4151 to 77",
    },
    {
      name: "COAST GUARD",
      phone: "(02) 8527-3877",
    },
    {
      name: "RED CROSS",
      phone: "143 OR (02) 8527-8385 to 95",
    },
    {
      name: "PNP",
      phone: "117 OR (02) 8722-0650",
    },
    {
      name: "PHIVOLCS",
      phone: "(02) 8426-1468 TO 79",
    },
    {
      name: "BFP",
      phone: "(02) 8426-0219; (02) 8426-0246",
    },
  ]);

  useEffect(() => {
    const getTrendingTags = async () => {
      setIsLoadingTags(true);
      try {
        const res = await _tags.getPopularTags();
        setTrendingTags(res);
      } catch (error) {
      } finally {
        setIsLoadingTags(false);
      }
    };
    getTrendingTags();
  }, []);

  useEffect(() => {
    const getVolunteers = async () => {
      setIsLoadingVolunteers(true);
      try {
        const res = await _users.getAllVolunteers();
        setVolunteers(res);
      } catch (error) {
      } finally {
        setIsLoadingVolunteers(false);
      }
    };
    getVolunteers();
  }, []);
  return (
    <div className="w-3/12 pr-10">
      <div className=" px-4 py-4  ">
        <div className="text-sm rounded-lg  bg-gray-50">
          <h1 className="text-xl font-bold border-b px-4 py-2">
            Trends for you
          </h1>
          <div className="flex  flex-col flex-wrap">
            {isLoadingTags ? (
              <div className="flex items-center justify-center py-4 w-full">
                <Loader size={30} />
              </div>
            ) : (
              trendingTags.map((tag) => {
                return (
                  <div key={tag.id} className="px-4 border-b">
                    <Hashtag id={tag.id} name={tag.tag} tag={tag} />
                  </div>
                );
              })
            )}
          </div>
          <h1 className="text-xl font-bold px-4 py-2 h-5"></h1>
        </div>
        <div className="text-sm mt-4 bg-gray-50  rounded-lg">
          <h1 className="text-xl font-bold border-b px-4 py-2">Hotlines</h1>
          {hotlines.map((hotline, idx) => {
            return (
              <p key={idx} className="mb-2 border-b py-2 px-4 flex flex-col">
                <span className="font-bold">{hotline.name}</span>
                <span className="mt-1 text-xs">{hotline.phone}</span>
              </p>
            );
          })}
          <h1 className="text-xl font-bold px-4 py-2 h-5"></h1>
        </div>
        <div className="text-sm mt-4 bg-gray-50 rounded-lg ">
          <h1 className="text-xl font-bold border-b px-4 py-2">VOLUNTEERS</h1>
          {isLoadingVolunteers ? (
            <div className="flex items-center justify-center py-4  w-full">
              <Loader size={30} />
            </div>
          ) : (
            <>
              {volunteers.map((volunteer) => {
                if (currentUser.id !== volunteer.id) {
                  return (
                    <VolunteerExtra
                      currentUser={currentUser}
                      key={volunteer.id}
                      volunteer={volunteer}
                    />
                  );
                }
              })}
              <h1 className="text-xl font-bold px-4 py-2 h-5"></h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Extra;
