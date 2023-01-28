import {
    Box,
    Button as MuiButton,
    Divider,
    IconButton as MuiIconButton,
    Stack,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import FormatBoldRoundedIcon from '@mui/icons-material/FormatBoldRounded'
import FormatItalicRoundedIcon from '@mui/icons-material/FormatItalicRounded'
import StrikethroughSRoundedIcon from '@mui/icons-material/StrikethroughSRounded'
import CodeRoundedIcon from '@mui/icons-material/CodeRounded'
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded'
import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded'
import UndoRoundedIcon from '@mui/icons-material/UndoRounded'
import RedoRoundedIcon from '@mui/icons-material/RedoRounded'
import TextAlign from '@tiptap/extension-text-align'
import Link from '@tiptap/extension-link'
import LinkRoundedIcon from '@mui/icons-material/LinkRounded'
import FormatAlignLeftRoundedIcon from '@mui/icons-material/FormatAlignLeftRounded'
import FormatAlignCenterRoundedIcon from '@mui/icons-material/FormatAlignCenterRounded'
import FormatAlignRightRoundedIcon from '@mui/icons-material/FormatAlignRightRounded'
import FormatAlignJustifyRoundedIcon from '@mui/icons-material/FormatAlignJustifyRounded'
import CleaningServicesRoundedIcon from '@mui/icons-material/CleaningServicesRounded'

const Button = styled(MuiButton)(() => ({
    textTransform: 'none',
    padding: '0 8px',
    minWidth: '0',
    color: '#2C5364',
    '&:hover': {
        backgroundColor: '#6dd5ed',
    },
    borderRadius: '4px',
    '&.is-active': {
        backgroundColor: '#B2FEFA',
    },
}))

const IconButton = styled(MuiIconButton)(() => ({
    borderRadius: '4px',
    color: '#2C5364',
    '&:hover': {
        backgroundColor: '#6dd5ed',
    },
    '&.is-active': {
        backgroundColor: '#B2FEFA',
        color: '#2980B9',
    },
}))

const MenuBar = ({ editor }: any) => {
    if (!editor) {
        return null
    }

    return (
        <Stack
            direction='row'
            flexWrap='wrap'
            spacing={1}
            bgcolor='#f2fcfe'
            p={1}
            borderRadius='8px'
        >
            <Button
                size='small'
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={editor.isActive('paragraph') ? 'is-active' : ''}
            >
                Paragraph
            </Button>
            <IconButton
                size='small'
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'is-active' : ''}
            >
                <FormatBoldRoundedIcon fontSize='small' />
            </IconButton>
            <IconButton
                size='small'
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? 'is-active' : ''}
            >
                <FormatItalicRoundedIcon fontSize='small' />
            </IconButton>
            <IconButton
                size='small'
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                className={editor.isActive('strike') ? 'is-active' : ''}
            >
                <StrikethroughSRoundedIcon fontSize='small' />
            </IconButton>
            <IconButton
                size='small'
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={!editor.can().chain().focus().toggleCode().run()}
                className={editor.isActive('code') ? 'is-active' : ''}
            >
                <CodeRoundedIcon fontSize='small' />
            </IconButton>
            <IconButton size='small'>
                <LinkRoundedIcon fontSize='small' />
            </IconButton>
            <Divider orientation='vertical' flexItem variant='middle'></Divider>
            <IconButton
                size='small'
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
                <FormatListBulletedRoundedIcon fontSize='small' />
            </IconButton>
            <IconButton
                size='small'
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive('orderedList') ? 'is-active' : ''}
            >
                <FormatListNumberedRoundedIcon fontSize='small' />
            </IconButton>
            <Divider orientation='vertical' flexItem variant='middle'></Divider>
            <IconButton
                size='small'
                onClick={() =>
                    editor.chain().focus().setTextAlign('left').run()
                }
                className={
                    editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''
                }
            >
                <FormatAlignLeftRoundedIcon fontSize='small' />
            </IconButton>
            <IconButton
                size='small'
                onClick={() =>
                    editor.chain().focus().setTextAlign('center').run()
                }
                className={
                    editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''
                }
            >
                <FormatAlignCenterRoundedIcon fontSize='small' />
            </IconButton>
            <IconButton
                size='small'
                onClick={() =>
                    editor.chain().focus().setTextAlign('right').run()
                }
                className={
                    editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''
                }
            >
                <FormatAlignRightRoundedIcon fontSize='small' />
            </IconButton>
            <IconButton
                size='small'
                onClick={() =>
                    editor.chain().focus().setTextAlign('justify').run()
                }
                className={
                    editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''
                }
            >
                <FormatAlignJustifyRoundedIcon fontSize='small' />
            </IconButton>
            <Divider orientation='vertical' flexItem variant='middle'></Divider>
            <Button
                size='small'
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                className={
                    editor.isActive('heading', { level: 1 }) ? 'is-active' : ''
                }
            >
                H1
            </Button>
            <Button
                size='small'
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
                className={
                    editor.isActive('heading', { level: 2 }) ? 'is-active' : ''
                }
            >
                H2
            </Button>
            <Button
                size='small'
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                }
                className={
                    editor.isActive('heading', { level: 3 }) ? 'is-active' : ''
                }
            >
                H3
            </Button>
            <Button
                size='small'
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 4 }).run()
                }
                className={
                    editor.isActive('heading', { level: 4 }) ? 'is-active' : ''
                }
            >
                H4
            </Button>
            <Button
                size='small'
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 5 }).run()
                }
                className={
                    editor.isActive('heading', { level: 5 }) ? 'is-active' : ''
                }
            >
                H5
            </Button>
            <IconButton
                size='small'
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().chain().focus().undo().run()}
            >
                <UndoRoundedIcon fontSize='small' />
            </IconButton>
            <IconButton
                size='small'
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().chain().focus().redo().run()}
            >
                <RedoRoundedIcon fontSize='small' />
            </IconButton>
            <IconButton
                size='small'
                onClick={() => editor.chain().focus().unsetAllMarks().run()}
            >
                <CleaningServicesRoundedIcon fontSize='small' />
            </IconButton>
        </Stack>
    )
}
const RichTextEditor = () => {
    const editor = useEditor({
        extensions: [StarterKit, Link, TextAlign],
        content: '<p>Hello World!</p>',
    })

    return (
        <Box p={2} bgcolor='#fff'>
            <Box borderRadius='8px' border='2px solid #2C5364' p={0.5}>
                <MenuBar editor={editor} />
                <Box
                    p={1.5}
                    minWidth='560px'
                    minHeight='200px'
                    sx={{
                        '& .ProseMirror:focus': {
                            outline: 'none',
                        },
                    }}
                >
                    <EditorContent editor={editor} />
                </Box>
            </Box>
        </Box>
    )
}

export default RichTextEditor
