import React from 'react'
import IframeRenderer, { iframeModel } from '@native-html/iframe-plugin';
import WebView from 'react-native-webview';
import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';


const renderers = {
    iframe: IframeRenderer
};

const customHTMLElementModels = {
    iframe: iframeModel
};

const ViewerHtml = ({ data }) => {
    const { width } = useWindowDimensions();
    const renderersProps = {
        img: {
            enableExperimentalPercentWidth: true
        },
        iframe: {
            scalesPageToFit: true,
            webViewProps: {
                /* Any prop you want to pass to iframe WebViews */
            }
        }
    };

    return (
        <RenderHtml
            contentWidth={width}
            source={{ html: data }}
            renderersProps={renderersProps}
            renderers={renderers}
            WebView={WebView}
            customHTMLElementModels={customHTMLElementModels}
        />
    )
}

export default ViewerHtml
