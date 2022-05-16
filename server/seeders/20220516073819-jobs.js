'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Jobs', [{
        jobName: 'Carpentry',
        jobType: 'carpenter',
        path: '/list/carpentry',
        img_src: '/a6d0c2faa6483814f6b0.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jobName: 'Plumbing',
        jobType: 'plumber',
        path: '/list/plumbing',
        img_src: '/7503712a3f372b9621b0.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jobName: 'Masonry',
        jobType: 'masonry',
        path: '/list/masonry',
        img_src: '/3cb719e15dbb60502866.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jobName: 'Gardening',
        jobType: 'gardener',
        path: '/list/gardening',
        img_src: '/eada23abe2b7d8a4b15a.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jobName: 'Housekeeping',
        jobType: 'housekeeper',
        path: '/list/housekeeping',
        img_src: '/47a592ce79de3e879c97.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jobName: 'Babysitting',
        jobType: 'babysitter',
        path: '/list/babysitting',
        img_src: '/cd10deacd38ec38b4186.png',
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Jobs', null, {});
  }
};
