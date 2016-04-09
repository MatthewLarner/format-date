var format = require('./'),
    test = require('tape'),
    date = new Date(1460202592458);

test('day month and year', function (t) {
  t.plan(1);
  t.equal(format('{utc-day} / {utc-month} / {utc-year}', date), '09 / 04 / 2016');
});

test('day-name month-name and short-year', function (t) {
  t.plan(1);
  t.equal(format('{utc-month-name} {utc-day}, {utc-day-name}', date), 'April 09, Saturday');
});

test('hours, minutes and seconds', function (t) {
  t.plan(1);
  t.equal(format('{utc-hours}:{utc-minutes}:{utc-seconds}', date), '11:49:52');
});
