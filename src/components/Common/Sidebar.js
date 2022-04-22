import React, {Component} from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { ListSubheader } from "@material-ui/core";

import FaceIcon from "@material-ui/icons/Face";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FileCopyIcon from "@material-ui/icons/FileCopy";

function ListItemLink(props){
    return <ListItem button component = {RouterLink} {...props}/>
}


class Sidebar extends Component{
    render(){
        return(
            <List>
                <ListItemLink to = "/admin">
                        <ListItemIcon>
                            <DashboardIcon/>
                        </ListItemIcon> 
                    <ListItemText primary = "DashBoard"/>
                </ListItemLink>
                <ListItemLink to = "/admin/posts">
                    <ListItemIcon>
                            <FileCopyIcon/>
                        </ListItemIcon> 
                    <ListItemText primary = "Posts"/>
                </ListItemLink>
                <ListItemLink to = "/admin/users">
                    <ListItemIcon>
                            <FaceIcon/>
                        </ListItemIcon> 
                        <ListItemText primary = "Users"/>
                </ListItemLink>
            </List>
            
        )
    }
}

export default Sidebar;