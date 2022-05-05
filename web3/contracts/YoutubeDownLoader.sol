//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract YoutubeDownLoader {
    /**
     * @notice Represents a single video content
     **/
    struct Video {
        /// @notice Unique Video string, get from youtube
        string id;
        /// @notice address of author
        address author;
        /// @notice block number when item was submitted
        uint256 createdAtBlock;
        /// @notice IPFS CID of item content
        string contentCID;
    }

    mapping(string => Video) videosMap;

    event NewVideo(string indexed id);

    /**
     * @notice Create a new video.
     * @param videoKey youtube video key
     * @param contentCID IPFS CID of post content object.
     */
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
