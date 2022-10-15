import { createReactEditorJS } from "react-editor-js";
import { EDITOR_TOOLS } from "./tools";
import { useCallback, useRef, useState, useEffect } from "react";
import { Button, Box, TextField, Typography } from "@mui/material";
import { editorJsParser } from "editorjs-data-parser";

import { useNavigate } from 'react-router-dom'
import FileBase64 from 'react-file-base64';
import { defaultValue } from "./DefaultValue";
import axios from 'axios'

const EditorJS = createReactEditorJS()

const Editor = () => {
    const navigate = useNavigate()
    let counter
    const editorCore = useRef(null)

    // For a new Post
    const [body, setBody] = useState()
    const [headerImg, setHeaderImg] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    console.log(headerImg, title, body, author)

    const handleInitialize = useCallback((instance) => {
        editorCore.current = instance
    }, [])

    const handleSave = useCallback(async () => {
        const savedData = await editorCore.current.save();
        let result = editorJsParser(savedData.blocks);
        console.log(result);
        setBody(savedData)
        counter = 1

        axios.post('https://blogarithm-api.onrender.com', body).then((res) => {
            console.log(res)
        })
    }, [])

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', maxWidth: '800px', p: 4 }}>
                <TextField onChange={(e) => setTitle(e.target.value)} sx={{mb: 1}} fullWidth align="center" variant="outlined" label="Blog Title" />
                <TextField onChange={(e) => setAuthor(e.target.value)} fullWidth align="center" variant="outlined" label="Author" />

                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', mt: 2, mb: 2}}>
                    <Typography mb={1} variant="body1">Set the Header Image</Typography>
                    <FileBase64
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setHeaderImg(base64)} />
                </Box>
                <EditorJS className="mainContainer" onInitialize={handleInitialize} tools={EDITOR_TOOLS} defaultValue={defaultValue} />
                <Button
                    variant="contained"
                    sx={{
                        mb: 5,
                        marginRight: 'auto',
                        marginLeft: 'auto',
                    }}
                    onClick={handleSave}
                >
                    Submit
                </Button>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        
            </Box>
        </>
    );
}

export default Editor;