import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { mergeMap, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {}

  setMetaDynamically(id: string, fn: () => Observable<any>): void {
    this.router.events
      .pipe(
        filter((event: any) => event instanceof NavigationEnd),
        mergeMap(() => {
          return fn();
        })
      )
      .subscribe((response) => {
        if (response) {
          this.title.setTitle(response.title);
        }
      });
  }

  setMetaTags(data: any) {
    this.title.setTitle(data.title);
    this.meta.addTags([
      { property: 'og:type', content: 'Todo' },
      { property: 'og:site_name', content: 'Kaiglo Nigeria' },
      { property: 'title', content: `${data.title}` },
      { property: 'og:title', content: `${data.title}` },
      { property: 'description', content: `${data.title}` },
      { property: 'og:description', content: `${data.title}` },
      { property: 'og:locale', content: `en_NG` },
      { name: 'robots', content: `index,follow` },
    ]);
  }
}
