/// <reference types="react" />
import './ui-video-seek-slider.scss';
export interface TimeCode {
    fromMs: number;
    description: string;
}
export interface Props {
    max: number;
    currentTime: number;
    bufferTime?: number;
    offset?: number;
    timeCodes?: TimeCode[];
    hideThumbTooltip?: boolean;
    limitTimeTooltipBySides?: boolean;
    secondsPrefix?: string;
    minutesPrefix?: string;
    onChange: (time: number, offsetTime: number) => void;
    getPreviewScreenUrl?: (hoverTimeValue: number) => string;
}
export declare const VideoSeekSlider: React.FC<Props>;
