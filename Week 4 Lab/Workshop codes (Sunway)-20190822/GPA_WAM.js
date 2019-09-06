const GPA_LOOKUP = {
	"HD": 4,
	"D": 3.0,
	"C": 2.0,
	"P": 1.0,
	"N": 0.3,
};

function calculateGPA(data)
{
	let totalGradeValue = 0;
	let totalCreditPoint = 0;

	for(let i = 0; i < data.length; i++)
	{
		for(let j = 0; j < data[i].units.length; j++)
		{
			if(data[i].units[j].mark !==undefined)
			{
				totalGradeValue += GPA_LOOKUP[data[i].units[j].grade] * 6;
				totalCreditPoint += 6;
			}
		}

	}

	let GPA = totalGradeValue / totalCreditPoint;

	return GPA.toFixed(2);

}

function calculateWAM(data)
{
	let firstYearMark = 0;
	let laterYearMark = 0;
	let firstYearCredit = 0;
	let laterYearCredit = 0;

	for(let i = 0; i < data.length; i++)
	{
		for(let j = 0; j < data[i].units.length; j++)
		{
			if(data[i].units[j].mark !==undefined)
			{
					if(data[i].units[j].code.charAt(3)=== "1")
					{
						firstYearMark +=  data[i].units[j].mark * 6 * 0.5;
						firstYearCredit += 6 * 0.5;
					}
					else
					{
						laterYearMark +=  data[i].units[j].mark * 6 * 1.0;
						laterYearCredit += 6 * 1.0;
					}

			}
		}
	}

	let WAM = (firstYearMark + laterYearMark) / (firstYearCredit + laterYearCredit);

	return WAM.toFixed(3);
}
