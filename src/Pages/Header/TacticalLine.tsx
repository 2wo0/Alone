import React from "react";
import styled from "styled-components";
import { Menu, Dropdown, Button } from "antd";

export default function TacticalLine() {
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <TacticalLineDropdown overlay={menu} placement="bottomLeft" arrow>
        <Button>Tactical Line</Button>
      </TacticalLineDropdown>
    </>
  );
}

const TacticalLineDropdown = styled(Dropdown)``;
