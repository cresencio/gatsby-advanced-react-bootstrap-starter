import React from "react";
import "./UserLinks.scss";
import {ButtonGroup, Button } from 'react-bootstrap';

function UserLinks({ config, labeled }) {
  function getLinkElements() {
    const { userLinks } = config;

    return userLinks.map((link) => (
      <Button href={link.url} key={link.label} variant="light">
        {labeled ? link.label : ""}
      </Button>
    ));
  }

  const { userLinks } = config;
  if (!userLinks) {
    return null;
  }
  return <ButtonGroup as="div" size='sm' className="user-links">{getLinkElements()}</ButtonGroup>;
}

export default UserLinks;
