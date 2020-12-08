import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Autocomplete from "@material-ui/lab/Autocomplete"
import { Dialog, DialogContent, DialogActions, DialogTitle, Typography, List, ListItem, ListItemIcon, TextField, Button } from "@material-ui/core"

import { Platform, Game, Size, Microphone } from "./lobby-template/"

import Controller from "@material-ui/icons/Games"
import Dpad from "@material-ui/icons/Gamepad"
import Mic from "@material-ui/icons/Mic"
import People from "@material-ui/icons/People"
import Description from "@material-ui/icons/Notes"

const useStyles = makeStyles(() => ({
  descriptionIconItem: {
    display: "flex",
    alignSelf: "flex-start",
    marginTop: 7,
  },
}))

function CreateTeamoDialog({ open, onClose }) {
  const classes = useStyles()

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="create-teamo-modal"
      classes={{ root: classes.dialogBody }}
    >
      <DialogTitle id="create-teamo-modal-title">
        <Typography variant="h4">
          Create Teamo
        </Typography>
      </DialogTitle>

      <DialogContent>
        <List>
          <ListItem>
            <ListItemIcon> <Controller /> </ListItemIcon>
            <Autocomplete
              renderInput={(params) => <TextField {...params} label={Game.label} />}
              options={Game.options}
              fullWidth
            />
          </ListItem>

          <ListItem>
            <ListItemIcon> <Dpad /> </ListItemIcon>
            <Autocomplete
              renderInput={(params) => <TextField {...params} label={Platform.label} />}
              options={Platform.options}
              fullWidth
            />
          </ListItem>

          <ListItem>
            <ListItemIcon> <Mic /> </ListItemIcon>
            <Autocomplete
              renderInput={(params) => <TextField {...params} label={Microphone.label} />}
              options={Microphone.options}
              fullWidth
            />
          </ListItem>

          <ListItem>
            <ListItemIcon> <People /> </ListItemIcon>
            <Autocomplete
              renderInput={(params) => <TextField {...params} label={Size.label} />}
              options={Size.options}
              fullWidth
            />
          </ListItem>

          <ListItem> 
            <ListItemIcon classes={{ root: classes.descriptionIconItem }}> <Description /> </ListItemIcon>
            <TextField
              label="Description"
              helperText="Max 150 characters"
              rows={3}
              multiline
              fullWidth
            />
          </ListItem>
        </List>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="primary" variant="contained">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  )
}

CreateTeamoDialog.propTypes = {
  /** If `true`, the modal is presented. */
  open: PropTypes.bool.isRequired,

  /** A function that is called when the modal needs to be closed. */
  onClose: PropTypes.func.isRequired,
}

CreateTeamoDialog.defaultProps = {
  open: false,
}

export default CreateTeamoDialog
