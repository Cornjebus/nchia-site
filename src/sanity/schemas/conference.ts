import { defineType, defineField } from 'sanity';

export const conference = defineType({
  name: 'conference',
  title: 'Conference',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Conference Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'season',
      title: 'Season',
      type: 'string',
      options: {
        list: [
          { title: 'Spring', value: 'spring' },
          { title: 'Fall', value: 'fall' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'registrationUrl',
      title: 'Registration URL',
      type: 'url',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Registration Open', value: 'open' },
          { title: 'Coming Soon', value: 'coming_soon' },
          { title: 'Sold Out', value: 'sold_out' },
          { title: 'Completed', value: 'completed' },
        ],
      },
      initialValue: 'coming_soon',
    }),
    defineField({
      name: 'memberPrice',
      title: 'Member Price',
      type: 'number',
    }),
    defineField({
      name: 'nonMemberPrice',
      title: 'Non-Member Price',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      season: 'season',
      year: 'year',
    },
    prepare({ title, season, year }) {
      return {
        title,
        subtitle: `${season} ${year}`,
      };
    },
  },
});
