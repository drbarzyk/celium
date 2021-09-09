import React from 'react';
import DiscordWhite from '../img/Discord-Logo-White.png';
import DiscordBlack from '../img/Discord-Logo-Black.png';

function DiscordIcon(props) {
  return (
    <img src={iconHelper(props)} alt="discord.gg/X8BENaR9Ft" height={props.height}/>
  );
}

function iconHelper(props) {
  return (props.color == 'white') ? DiscordWhite : DiscordBlack
}

export default DiscordIcon;