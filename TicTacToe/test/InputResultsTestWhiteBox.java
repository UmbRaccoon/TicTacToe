

import domain.InputResults;
import junit.framework.Assert;

import org.junit.Test;

/**
 * @author Arnþór
 */

public class InputResultsTestWhiteBox {
	int[]arr = new int[9];
	private boolean isSuccess;
    private boolean isVictory = false;
    private int renderSquareId = -1;
    private int renderSymbolId = -1;
    private int victoryLine;
    private int victoryPlayer = 0;
    private void setArrayTo1234(int[] arr2){
    	for(int i=0;i<9;i++)
    	{
    		arr[i]=i;
    	}
    }
	private boolean successCheck(int[] arr, int squareId)
    {
        if (squareId < 0 || squareId > 8)
            return false;
        else
            return (arr[squareId] == 0);
    }
	private boolean checkVictoryAndSetVictryLine(int[] arr, int squareId, int playerId)
    {
    	if(arr.equals(null))
    		return false;
        int a = squareId%3;
        int b = squareId-a;
        if (arr[0+a] == arr[3+a] && arr[3+a] == arr[6+a])
        {
            this.victoryLine = a;
            return true;
        }
        else if (arr[0+b] == arr[1+b] && arr[1+b] == arr[2+b])
        {
            this.victoryLine = 3+b/3;
            return true;
        }
        else if (squareId == 0 || squareId == 4 || squareId == 8)
        {
            if (arr[0] == arr[4] && arr[4] == arr[8])
            {
                this.victoryLine = 6;
                return true;
            }
        }
        else if (squareId == 2 || squareId == 4 || squareId == 6)
        {
            if(arr[2] == arr[4] && arr[4] == arr[6])
            {
                this.victoryLine = 7;
                return true;
            }

        }
        return false;
    }
	
	InputResults IR = new InputResults(arr,1,1);
	@Test
	public void test() {
		
		
		IR.setSuccess(false);
		Assert.assertEquals(false,IR.isSuccess());
		IR.setRenderSquareId(14);
		Assert.assertEquals(14, IR.getRenderSquareId());
		IR.setVictoryPlayer(99);
		Assert.assertEquals(99, IR.getVictoryPlayer());
		IR.setRenderSymbolId(1234);
		Assert.assertEquals(IR.getRenderSymbolId(),1234);
		IR.setVictoryLine(99);
		Assert.assertEquals(99,IR.getVictoryLine());
		Assert.assertEquals(false, successCheck(arr, -1));
		Assert.assertEquals(true, successCheck(arr, 0));
		//all should return true because the array is set to 0
		Assert.assertEquals(true, checkVictoryAndSetVictryLine(arr, 2, -1));
		Assert.assertEquals(true, checkVictoryAndSetVictryLine(arr, 3, 2));
		Assert.assertEquals(true, checkVictoryAndSetVictryLine(arr, 4, 9));
		setArrayTo1234(arr);
		//all should return false
		Assert.assertEquals(false, checkVictoryAndSetVictryLine(arr, 2, -1));
		Assert.assertEquals(false, checkVictoryAndSetVictryLine(arr, 3, 2));
		Assert.assertEquals(false, checkVictoryAndSetVictryLine(arr, 4, 9));
		
		
	}

}
