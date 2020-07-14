export default class SocialInteraction {
  name: string;
  date: Date;
  hours: number;
  isSocialDistancing: boolean;

  constructor(socialInteraction: any) {
    this.name = socialInteraction.name;
    this.date = socialInteraction.date;
    this.hours = socialInteraction.hours;
    this.isSocialDistancing = socialInteraction.isSocialDistancing;
  }
}
