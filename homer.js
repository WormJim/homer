const food = {
  1: {
    // add level one foods
    donut: 1,
    guitar: 2,
    cello: 5
  },
  2: {
    beer: 10
  },
  3: {
    // add level three foods
    car: 15
  },
  4: {
    // add level four foods
    marge: 60,
    boat: 30
  }
};

select jobID from tblJob with(nolock)
inner join (select item from udf_List2Table(ABC123, , )) f on tblJob.jobID = f.item
where (enabled = convert(varchar, @enabledFG) or enabled =  convert(varchar, @disabledFG)
and (name like @textToMatch  or description like @textToMatch )
and corp_id = convert(varchar, @corpID)

