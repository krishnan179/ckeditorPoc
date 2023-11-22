/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import BaseEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import TrackChanges from '@ckeditor/ckeditor5-track-changes/src/trackchanges';
import Comments from '@ckeditor/ckeditor5-comments/src/comments';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import CKBoxPlugin from '@ckeditor/ckeditor5-ckbox/src/ckbox';
import PictureEditing from '@ckeditor/ckeditor5-image/src/pictureediting';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import RevisionHistory from '@ckeditor/ckeditor5-revision-history/src/revisionhistory';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import * as CKBox from 'ckbox';
import 'ckbox/dist/styles/ckbox.css';
declare class ClassicEditorWithRevisionHistory extends BaseEditor {
    static builtinPlugins: (typeof Bold | typeof Italic | typeof Underline | typeof List | typeof Autoformat | typeof Alignment | typeof Autosave | typeof BlockQuote | typeof CKBoxPlugin | typeof PictureEditing | typeof CloudServices | typeof Essentials | typeof FontFamily | typeof FontSize | typeof Heading | typeof Highlight | typeof Image | typeof ImageCaption | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof Link | typeof MediaEmbed | typeof Paragraph | typeof PasteFromOffice | typeof RemoveFormat | typeof RevisionHistory | typeof Strikethrough | typeof Table | typeof TableToolbar | typeof Comments | typeof TrackChanges)[];
    static defaultConfig: {
        ckbox: {
            tokenUrl: string;
        };
        toolbar: string[];
        image: {
            toolbar: string[];
        };
        table: {
            contentToolbar: string[];
            tableToolbar: string[];
        };
        mediaEmbed: {
            toolbar: string[];
        };
        comments: {
            editorConfig: {
                extraPlugins: (typeof Bold | typeof Italic | typeof Underline | typeof List | typeof Autoformat)[];
            };
        };
    };
}
declare const _default: {
    ClassicEditorWithRevisionHistory: typeof ClassicEditorWithRevisionHistory;
    CKBox: typeof CKBox;
};
export default _default;
