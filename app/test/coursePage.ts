import { Locator, Page } from '@playwright/test';

export class CoursePage {
  readonly page: Page;
  readonly title: Locator;
  readonly openQuestions: Locator;
  readonly amountsOfAnswers: Locator;
  readonly amountsOfLikes: Locator;
  readonly likeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('h1');
    this.openQuestions = page.locator('id=open-question-text')
    this.amountsOfAnswers = page.locator('id=amount-of-answers-small')
    this.amountsOfLikes = page.locator('id=amount-of-likes-small')
    this.likeButton = page.locator('text=Like!')
  }

  async goto(courseId: string) {
    await this.page.goto('/course/' + courseId);
  }
}