 export interface IArticleShort{
    id: number,
    featured?: boolean,
    title: string,
    url: string,
    imageUrl: string,
    newsSite?: string,
    summary: string,
    publishedAt: string,
    launches?: [
        {
        id: string,
        provider: string
        }
    ],
    events?: [
        {
        id: string,
        provider: string
        }
    ]
}

export class ArticleShort implements IArticleShort{
    id: IArticleShort['id'];
    title: IArticleShort['title'];
    url: IArticleShort['url'];
    imageUrl: IArticleShort['imageUrl'];
    summary: IArticleShort['summary'];
    publishedAt: IArticleShort['publishedAt'];

    constructor(source: IArticleShort, keywords: string[] = []) {
        Object.assign(this, source);
        if (keywords.length) {
            this.title = this.highlightKeywords(this.title, keywords);
            this.summary = this.highlightKeywords(this.summary, keywords)
        }
    }

    get dateOutput(): Date{
        return new Date(this.publishedAt)
    }

    highlightKeywords(text: string, keywords: string[]): string{
        let highlighted: string = '';
        for (let word of keywords) {
            let re = new RegExp(`${word}`, `gi`)
            highlighted = text.replace(re, (match => {
                return  `<span class = "highlighted">${match}</span>`
            }))
        }
        return highlighted;
    }
}


export interface IFullArticle{
    id: number,
    title: string,
    url: string,
    imageUrl: string,
    newsSite: string,
    summary: string,
    publishedAt: string,
    updatedAt: string,
    featured: false,
    launches: [],
    events: []
}

export class FullArticle implements IFullArticle{
    id: IFullArticle['id'];
    title: IFullArticle['title'];
    url: IFullArticle['url'];
    imageUrl: IFullArticle['imageUrl'];
    newsSite: IFullArticle['newsSite'];
    summary: IFullArticle['summary'];
    publishedAt: IFullArticle['publishedAt'];
    updatedAt: IFullArticle['updatedAt'];
    featured: IFullArticle['featured'];
    launches: IFullArticle['launches'];
    events: IFullArticle['events'];

    constructor(source: IFullArticle) {
        Object.assign(this, source)
    }
} 