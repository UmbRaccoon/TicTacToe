import static org.junit.Assert.*;

import domain.InputResults;
import junit.framework.Assert;

import org.junit.Test;

/**
 * @author Arnthor
 */

public class InputResultsTest3 {
	int[]arr = new int[9];
	
	private void resetArr(){
		for(int i=0;i<9;i++)
		{
			arr[i]=0;
		}
	}
	
	InputResults IR = new InputResults(arr,1,1);
	@Test
	public void test() {
		
		
		Assert.assertNotNull(IR);
		Assert.assertEquals(true, IR.isSuccess());
		IR.setSuccess(false);
		Assert.assertEquals(false,IR.isSuccess());
		//get og set
		IR.setRenderSquareId(14);
		Assert.assertEquals(14, IR.getRenderSquareId());
		IR.setVictoryPlayer(99);
		Assert.assertEquals(99, IR.getVictoryPlayer());
		IR.setRenderSymbolId(1234);
		Assert.assertEquals(IR.getRenderSymbolId(),1234);
		IR.setVictoryLine(99);
		Assert.assertEquals(99,IR.getVictoryLine());
		
		
		//reset the array and test victory
		//testing for 0,1,2 that should return 3
		arr[0] = 1;
		arr[1] = 1;
		InputResults IR2 = new InputResults(arr, 2, 1);
		Assert.assertEquals(true, IR2.isSuccess());
		Assert.assertEquals(3, IR2.getVictoryLine());
		arr[1] = -1;
		arr[2] = -1;
		arr[3] = 1;
		InputResults IR3 = new InputResults(arr, 6, 1);
		Assert.assertEquals(true, IR3.isSuccess());
		Assert.assertEquals(true, IR3.isVictory());
		Assert.assertEquals(1, IR3.getVictoryPlayer());
		Assert.assertEquals(0, IR3.getVictoryLine());
		
		//finally check diagonal lines
		resetArr();
		arr[0] = 2;
		arr[4] = 2;
		InputResults IR4 = new InputResults(arr, 8, 2);
		
		Assert.assertEquals(true, IR4.isSuccess());
		Assert.assertEquals(true, IR4.isVictory());
		Assert.assertEquals(2, IR4.getVictoryPlayer());
		Assert.assertEquals(6, IR4.getVictoryLine());
		
		
		
	}

}
