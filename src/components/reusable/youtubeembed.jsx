/**
 * Video Embed
 */

// Dependencies
import React from "react";
import PropTypes from "prop-types";

// MUI
import { Box } from "@mui/material";

const YoutubeEmbed = ({ embedLink }) => {

    const id = embedLink.split('/').pop();
    return (
        <Box
            className="video-responsive"
            sx={{
                overflow: 'hidden',
                paddingBottom: '56.25%',
                position: 'relative',
                height: 0,
                '> iframe': {
                    left: 0,
                    top: 0,
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                }
            }}
        >
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </Box>
    );
};

YoutubeEmbed.propTypes = {
    embedLink: PropTypes.string.isRequired
};

export default YoutubeEmbed;
