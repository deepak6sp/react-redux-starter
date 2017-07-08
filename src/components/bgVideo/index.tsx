import * as React from 'react';

interface BgVideoProps { 
    Text: string;
}
const BgVideo: React.SFC<BgVideoProps> = (props) => <div>Testing {props.Text}</div>;

export default BgVideo;
