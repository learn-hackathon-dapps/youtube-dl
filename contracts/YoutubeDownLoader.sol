//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract YoutubeDownLoader {
    struct Video {
        string id;
        address author;
        uint256 createdAtBlock;
        string contentCID;
    }

    mapping(string => Video) videosMap;

    event NewVideo(string indexed id);

    function createVideo(string memory videoKey, string memory contentCID)
        public
    {
        videosMap[videoKey] = Video(
            videoKey,
            msg.sender,
            block.number,
            contentCID
        );
        emit NewVideo(contentCID);
    }

    function searchVideo(string memory videoKey)
        public
        view
        returns (Video memory)
    {
        return videosMap[videoKey];
    }
}
