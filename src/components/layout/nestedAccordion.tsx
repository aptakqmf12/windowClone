import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore, Home } from "@mui/icons-material";

interface NestedAccordionProps {
  list: {
    name: string;
    path: any;
    icon?: any;
    onClick: (v: any) => void;

    childList?: {
      name: string;
      path: any;
      icon?: any;
      onClick: (v: any) => void;
    }[];
  }[];
  currentPath: any;
}

export default function NestedAccordion({
  list,
  currentPath,
}: NestedAccordionProps) {
  return (
    <List>
      {list.map((accrd, i) => {
        const { icon, name, path, onClick, childList } = accrd;
        const isCurrentPath = path === currentPath;

        if (childList) {
          return (
            <FoldableList
              name={name}
              icon={icon}
              childList={childList}
              currentPath={currentPath}
              key={i}
            />
          );
        }
        return (
          <List component="div" disablePadding key={i}>
            <ListItem onClick={onClick} disablePadding>
              <ListItemButton>
                {icon && (
                  <ListItemIcon sx={{ minWidth: "auto", marginRight: 1 }}>
                    {icon}
                  </ListItemIcon>
                )}

                <Typography
                  color={isCurrentPath ? "primary.main" : "font"}
                  fontWeight={isCurrentPath ? 600 : 400}
                >
                  {name}
                </Typography>
              </ListItemButton>
            </ListItem>
          </List>
        );
      })}
    </List>
  );
}

interface AccordionProps {
  name: string;
  icon?: any;
  path: any;
  onClick: (v: any) => void;
}

const FoldableList = ({
  name,
  icon,
  childList,
  currentPath,
}: {
  name: string;
  icon: any;
  childList: AccordionProps[];
  currentPath: any;
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const isNestedActive = childList.some((list) => list.path === currentPath);

    if (isNestedActive) {
      setOpen(true);
    }
  }, []);

  return (
    <>
      <ListItem onClick={() => setOpen(!open)} style={{ cursor: "pointer" }}>
        {icon && (
          <ListItemIcon sx={{ minWidth: "auto", marginRight: 1 }}>
            {icon}
          </ListItemIcon>
        )}
        <Typography>{name}</Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {childList.map((child, i) => {
            const { name, icon, path, onClick } = child;
            const isCurrentPath = path === currentPath;
            return (
              <ListItem onClick={onClick} key={i}>
                <ListItemButton sx={{ pl: 4 }}>
                  {icon && (
                    <ListItemIcon sx={{ minWidth: "auto", marginRight: 1 }}>
                      {icon}
                    </ListItemIcon>
                  )}
                  <Typography
                    color={isCurrentPath ? "primary.main" : "font"}
                    fontWeight={isCurrentPath ? 600 : 400}
                  >
                    {name}
                  </Typography>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </>
  );
};
