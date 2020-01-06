import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeHTMLTags } from "../helpers";

class SidebarItemComponent extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      subtitleText: ""
    };
    //  console.log(`this.props.selectedNoteIndex`, this.props.selectedNoteIndex);

    this.selectNote = this.selectNote.bind(this);
  }

  componentDidMount = () => {
    console.log("componentDidMount");
    this.updateSubtitle();
  };

  componentDidUpdate = () => {
    //let title = this.props._notes?.title;
    console.log(`SidebarItem componentDidUpdate`);
    this.updateSubtitle();
  };

  render() {
    const { _index, _note, classes, selectedNoteIndex } = this.props;
    console.log("SidebarItem rendering");
    return (
      <ListItem
        className={classes.listItem}
        selected={_index === selectedNoteIndex}
        alignItems="flex-start"
      >
        <div
          className={classes.textSection}
          onClick={() => this.selectNote(_note, _index)}
          role="button"
        >
          <ListItemText
            primary={_note.title}
            secondary={this.state.subtitleText}
          ></ListItemText>
        </div>
        <DeleteIcon
          onClick={() => this.deleteNote(_note)}
          className={classes.deleteIcon}
        ></DeleteIcon>
      </ListItem>
    );
  }
  selectNote = (n, i) => {
    console.log("SidebarItem: selectNote");
    //this.setState({ index: i });
    this.props.selectNote(n, i);
  };
  deleteNote = note => {
    if (window.confirm(`Are you sure you want to delete: ${note.title}`)) {
      this.props.deleteNote(note);
    }
  };
  updateSubtitle = () => {
    let _text = this.props._note.body;
    if (_text.length === 0) {
      this.setState({
        subtitleText: "Empty"
      });
      return;
    }

    let text = _text.substring(0, 30).replace(/(<([^>]+)>)/gi, "");
    console.log(`TEXT, ${text}`);
    console.log("SidebarItem componentDidMount");
    if (text.length > 20) {
      this.setState({
        subtitleText: `${text}...`
      });
    } else {
      this.setState({
        subtitleText: `${text}`
      });
    }
  };
}

export default withStyles(styles)(SidebarItemComponent);
