import { Injectable } from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class OfferService {
  async generateOffer(url: string) {
    const response = await axios(url);
    const data = [];
    const html = response.data;
    const $ = cheerio.load(html);
    const title = $('.topcard__title').text();
    const companyName = $('.topcard__org-name-link').text();
    const companyLinkedinUrl = $('.topcard__org-name-link').attr('href');

    const description = $('.description__text')
      // .find('section')
      // .find('div')
      .text();

    const jobLevel = $('.description__job-criteria-text--criteria').text();
    // const jobLevel = $('.description__job-criteria-text--criteria').text();
    const companyLocation = $(
      '.topcard__flavor.topcard__flavor--bullet',
    ).text();

    const acceptingJob = !!!$(
      '.closed-job.closed-job__flavor.topcard__flavor-row',
    ).text();

    data.push({
      title,
      companyName: this.computeLabel(companyName),
      companyLinkedinUrl,
      description: this.computeLabel(description),
      jobLevel: this.computeLabel(jobLevel)
        .split(' ')
        .filter((val) => val.length > 0),
      companyLocation: this.computeLabel(companyLocation),
      acceptingJob,
    });

    return {
      data,
      results: data.length,
    };
  }

  private computeLabel(text: string) {
    return text.replace(/(\r\n|\n|\r)/gm, '').trim();
  }

  create(createOfferDto: CreateOfferDto) {
    return createOfferDto;
  }
  //
  // findAll() {
  //   return `This action returns all offer`;
  // }
  //
  // findOne(id: number) {
  //   return `This action returns a #${id} offer`;
  // }
  //
  // update(id: number, updateOfferDto: UpdateOfferDto) {
  //   return `This action updates a #${id} offer`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} offer`;
  // }
}
