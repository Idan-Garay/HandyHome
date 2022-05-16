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
        img_src: '../assets/tools.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jobName: 'Plumbing',
        jobType: 'plumber',
        path: '/list/plumbing',
        img_src: '../assets/tap.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jobName: 'Masonry',
        jobType: 'masonry',
        path: '/list/masonry',
        img_src: '../assets/brickwork.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jobName: 'Gardening',
        jobType: 'gardener',
        path: '/list/gardening',
        img_src: '../assets/gardening.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jobName: 'Housekeeping',
        jobType: 'housekeeper',
        path: '/list/housekeeping',
        img_src: '../assets/sweeping.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jobName: 'Babysitting',
        jobType: 'babysitter',
        path: '/list/babysitting',
        img_src: '../assets/baby-stroller.png',
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
