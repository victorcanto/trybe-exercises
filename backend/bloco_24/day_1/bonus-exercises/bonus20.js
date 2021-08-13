db.xmen.updateMany(
  { occupation: 'Junior Staff', areas: { $exists: false } },
  {
    $currentDate: { lastUpdate: { $type: 'timestamp' } },
    $set: { areas: ['Outside'] },
  }
);
