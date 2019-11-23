import { Category } from './Category';
import { SafeUrl } from '@angular/platform-browser';

export class Article {
    Title: string;
    PubDate: string;
    Link: string;
    GUID: string;
    Author: string;
    Thumbnail: string;
    Description: string;
    Content: string;
    Enclosure: string;
    Categories: Category[];
    SafeThumbnail: SafeUrl;
}


